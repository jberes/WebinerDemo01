import { IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownHeader, IgrDropdownHeaderModule, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownHeaderModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const projectDropdown = useRef<IgrDropdown>(null);
  const profileDropDown = useRef<IgrDropdown>(null);
  const newTaskDialog = useRef<IgrDialog>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout header")}>
          <div className={classes("row-layout group")}>
            <img src="/src/assets/slingshot-icon.svg" onClick={() => navigate(`/master-view/my-tasks`)} className={classes("image")} />
            <IgrButton variant="flat" clicked={(e: any) => projectDropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button button_2")}>
              <span key={uuid()}>Home</span>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>keyboard_arrow_down</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrDropdown ref={projectDropdown} className={classes("project-dropdown project-dropdown_1")}>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Home</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Company Inc.</span>
              </IgrDropdownItem>
              <IgrDropdownHeader key={uuid()}>
                <span key={uuid()}>INDIGO.DESIGN</span>
              </IgrDropdownHeader>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Growth hacking</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Public preview</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>UX Feedback</span>
              </IgrDropdownItem>
              <IgrDropdownHeader key={uuid()}>
                <span key={uuid()}>Reveal</span>
              </IgrDropdownHeader>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Onboarding</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Analytics</span>
              </IgrDropdownItem>
            </IgrDropdown>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrButton clicked={() => newTaskDialog?.current?.toggle()} className={classes("button_1 button_1_1")}>
              <span className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Task</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>add_alert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>message</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <div style={{display: 'contents'}} onClick={(e: any) => profileDropDown?.current?.toggleTarget(e.target || e.i.nativeElement)}>
              <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar")}></IgrAvatar>
            </div>
            <IgrDropdown ref={profileDropDown} className={classes("profile-drop-down")}>
              <IgrDropdownItem disabled="true" key={uuid()}>
                <span key={uuid()}>Edit Profile</span>
              </IgrDropdownItem>
              <IgrDropdownItem disabled="true" key={uuid()}>
                <span key={uuid()}>About</span>
              </IgrDropdownItem>
              <div style={{display: 'contents'}} onClick={() => navigate(`/login/sign-in`)} key={uuid()}>
                <IgrDropdownItem>
                  <span key={uuid()}>Logout</span>
                </IgrDropdownItem>
              </div>
            </IgrDropdown>
          </div>
        </div>
        <div className={classes("row-layout group_2")}>
          <IgrNavDrawer position="relative" className={classes("nav-drawer")}>
            <div slot="mini" key={uuid()}>
              <div style={{display: 'contents'}} onClick={() => navigate(`/master-view/my-tasks`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon_2")} key={uuid()}>
                      <span key={uuid()}>assignment_turned_in</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/master-view/dashboards`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon_2")} key={uuid()}>
                      <span key={uuid()}>dashboard</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/master-view/backlog`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon_2")} key={uuid()}>
                      <span key={uuid()}>vertical_split</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <IgrNavDrawerItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>bar_chart</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerItem>
              <IgrNavDrawerItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>folder</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon_2")} key={uuid()}>
                  <span key={uuid()}>account_circle</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Title goes here</div>
            </IgrNavDrawerItem>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newTaskDialog}>
          <h5 slot="title" key={uuid()}>
            <span>New Task</span>
          </h5>
          <div className={classes("row-layout group_3")} key={uuid()}>
            <div className={classes("column-layout group_4")}>
              <IgrInput label="Task Name" outlined="false" className={classes("user-input")}></IgrInput>
              <div className={classes("row-layout group_5")}>
                <span className={classes("material-icons icon_2")}>
                  <span key={uuid()}>people</span>
                </span>
                <IgrButton variant="flat" className={classes("button")}>
                  <span key={uuid()}>ASSIGN</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <IgrTextarea label="Add Description" outlined="false" className={classes("user-input")}></IgrTextarea>
              <div className={classes("row-layout group_6")}>
                <div className={classes("row-layout group_7")}>
                  <span className={classes("material-icons icon_3")}>
                    <span key={uuid()}>attach_file</span>
                  </span>
                  <IgrButton variant="flat" className={classes("button")}>
                    <span key={uuid()}>Add Attachment</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div className={classes("row-layout group_7")}>
                  <span className={classes("material-icons icon_3")}>
                    <span key={uuid()}>access_time</span>
                  </span>
                  <p className={classes("typography__body-1 text")}>
                    <span>Status</span>
                  </p>
                  <IgrBadge className={classes("badge")}>
                    <span key={uuid()}>TO DO</span>
                  </IgrBadge>
                </div>
              </div>
              <div className={classes("row-layout group_8")}>
                <IgrButton variant="flat" clicked={() => newTaskDialog?.current?.toggle()} className={classes("button")}>
                  <span key={uuid()}>CANCEL</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton clicked={() => newTaskDialog?.current?.toggle()} className={classes("button")}>
                  <span key={uuid()}>CREATE</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}></div>
        </IgrDialog>
      </div>
    </>
  );
}
