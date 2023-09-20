use geo_types::geometry::*;

use crate::transform::Transform;

impl Transform for Point {
    fn transform_coordinates<F>(&mut self, f: &mut F) -> crate::errors::Result<()>
    where
        F: FnMut(f64, f64, f64) -> crate::errors::Result<(f64, f64, f64)>,
    {
        let mut xy = (self.0.x, self.0.y);
        (&mut xy).transform_coordinates(f)?;
        self.set_x(xy.0);
        self.set_y(xy.1);

        Ok(())
    }
}

impl Transform for MultiPoint {
    fn transform_coordinates<F>(&mut self, f: &mut F) -> crate::errors::Result<()>
    where
        F: FnMut(f64, f64, f64) -> crate::errors::Result<(f64, f64, f64)>,
    {
        self.iter_mut()
            .try_for_each(|point| point.transform_coordinates(f))
    }
}

#[cfg(test)]
mod tests {

    use approx::assert_abs_diff_eq;

    use crate::{transform::transform, Proj};

    use super::*;

    #[test]
    fn transforms_point() {
        let mut point = Point::from((2.0f64.to_radians(), 1.0f64.to_radians()));

        let from = Proj::from_proj_string("+proj=latlong +ellps=GRS80").unwrap();
        let to = Proj::from_proj_string("+proj=etmerc +ellps=GRS80").unwrap();

        transform(&from, &to, &mut point).unwrap();

        assert_abs_diff_eq!(point.x(), 222650.79679758527, epsilon = 1.0e-10);
        assert_abs_diff_eq!(point.y(), 110642.22941193319, epsilon = 1.0e-10);
    }

    #[test]
    fn transforms_multi_point() {
        let mut multi_point: MultiPoint = (0..10)
            .map(|_| Point::from((2.0f64.to_radians(), 1.0f64.to_radians())))
            .collect();

        let from = Proj::from_proj_string("+proj=latlong +ellps=GRS80").unwrap();
        let to = Proj::from_proj_string("+proj=etmerc +ellps=GRS80").unwrap();

        transform(&from, &to, &mut multi_point).unwrap();

        multi_point.iter().for_each(|point| {
            assert_abs_diff_eq!(point.x(), 222650.79679758527, epsilon = 1.0e-10);
            assert_abs_diff_eq!(point.y(), 110642.22941193319, epsilon = 1.0e-10);
        });
    }
}
