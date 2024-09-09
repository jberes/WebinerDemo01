import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import styles from './create-account.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function CreateAccount() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout create-account-container")}>
        <div className={classes("row-layout left")}>
          <div className={classes("column-layout group")}>
            <div className={classes("row-layout group_1")}>
              <img src="/src/assets/slingshot-icon.svg" className={classes("image")} />
              <p className={classes("typography__subtitle-2 text")}>
                <span>TEAM COLLABORATION</span>
              </p>
            </div>
            <h5 className={classes("h5")}>
              <span>Create your free account</span>
            </h5>
            <IgrInput label="Email / username" outlined="true" className={classes("input")}></IgrInput>
            <IgrInput type="password" label="Password" outlined="true" className={classes("input")}></IgrInput>
            <div className={classes("row-layout group_2")}>
              <IgrInput label="First Name" outlined="true" className={classes("input_1")}></IgrInput>
              <IgrInput label="Last Name" outlined="true" className={classes("input_1")}></IgrInput>
            </div>
            <p className={classes("typography__body-2 text_1")}>
              <span>By providing your information and submitting this form, you are agreeing to Infragistic's Terms of Use and Privacy Policy.</span>
            </p>
            <IgrButton clicked={() => navigate(`/master-view/my-tasks`)} className={classes("button")}>
              <span key={uuid()}>CREATE NEW ACCOUNT</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__body-2 text_2")}>
                <span>Already have an account?</span>
              </p>
              <a href="" onClick={() => navigate(`/login/sign-in`)} className={classes("typography__body-2 hyperlink")}>
                <span>Sign in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
