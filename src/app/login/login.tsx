import { Outlet } from 'react-router-dom';
import styles from './login.module.css';
import createClassTransformer from '../style-utils';

export default function Login() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout login-container")}>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
        <div className={classes("row-layout right")}>
          <div className={classes("column-layout group")}>
            <h4 className={classes("h4")}>
              <span>Keep everyone in the loop!</span>
            </h4>
            <img src="/src/assets/ab-hero.svg" className={classes("image")} />
          </div>
        </div>
      </div>
    </>
  );
}
