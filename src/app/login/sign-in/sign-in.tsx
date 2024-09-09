import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './sign-in.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function SignIn() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout sign-in-container")}>
        <div className={classes("row-layout left")}>
          <div className={classes("column-layout group")}>
            <div className={classes("row-layout group_1")}>
              <img src="/src/assets/slingshot-icon.svg" className={classes("image")} />
              <p className={classes("typography__subtitle-2 text")}>
                <span>TEAM COLLABORATION</span>
              </p>
            </div>
            <h5 className={classes("h5")}>
              <span>Sign in</span>
            </h5>
            <div className={classes("row-layout group_2")}>
              <IgrButton className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>donut_small</span>
                </span>
                <span key={uuid()}>Google</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>dashboard</span>
                </span>
                <span key={uuid()}>Microsoft</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>copyright</span>
                </span>
                <span key={uuid()}>Apple</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <IgrInput label="Email / username" outlined="true" className={classes("input")}></IgrInput>
            <IgrInput type="password" label="Password" outlined="true" className={classes("input")}></IgrInput>
            <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
              <span key={uuid()}>Keep me signed in</span>
            </IgrCheckbox>
            <IgrButton clicked={() => navigate(`/master-view/my-tasks`)} className={classes("button_1")}>
              <span key={uuid()}>Sign in</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <a href="" className={classes("typography__body-2 hyperlink")}>
              <span>Forgot your account?</span>
            </a>
            <IgrButton variant="outlined" clicked={() => navigate(`/login/create-account`)} className={classes("button_1")}>
              <span key={uuid()}>Create New Account</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
      </div>
    </>
  );
}
