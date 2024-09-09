import { IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrChip, IgrChipModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { useRef, useState } from 'react';
import styles from './my-tasks.module.css';
import createClassTransformer from '../../style-utils';

IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonModule.register();
IgrCalendarModule.register();
IgrChipModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrTextareaModule.register();

export default function MyTasks() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const editTaskDialog = useRef<IgrDialog>(null);
  const newTaskDialog1 = useRef<IgrDialog>(null);
  const [value, setValue] = useState<string | undefined>('This is the Task Name');
  const [value1, setValue1] = useState<string | undefined>('This is a sample description of a task. It should have the most important things that should be achieved.');

  return (
    <>
      <div className={classes("row-layout my-tasks-container")}>
        <div className={classes("column-layout left-nav")}>
          <h6 className={classes("content_2")}>
            <span>Tasks</span>
          </h6>
          <div className={classes("row-layout group")}>
            <p className={classes("typography__body-1 text")}>
              <span>VD Team</span>
            </p>
            <IgrBadge className={classes("badge")}>
              <span key={uuid()}>11</span>
            </IgrBadge>
          </div>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-2 content_2")}>
              <span>LISTS</span>
            </p>
            <IgrList className={classes("list")}>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>General</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>App Builder</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Indigo.Design</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Marketing</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Customer Portal</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
            </IgrList>
            <IgrButton variant="flat" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>FILTER</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-2 content_2")}>
              <span>FILTERS</span>
            </p>
            <IgrList className={classes("list")}>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Due this Week</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>Overdue</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>more_vert</span>
                </span>
              </IgrListItem>
            </IgrList>
            <IgrButton variant="flat" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>FILTER</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
        <div className={classes("row-layout right-container")}>
          <div className={classes("column-layout content")}>
            <div className={classes("row-layout content-toolbar")}>
              <h5 className={classes("h5")}>
                <span>VD Team</span>
              </h5>
              <div className={classes("row-layout group_2")}>
                <IgrButton variant="flat" className={classes("button_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>list</span>
                  </span>
                  <span key={uuid()}>LIST</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" className={classes("button_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>calendar_view_day</span>
                  </span>
                  <span key={uuid()}>SECTION</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" className={classes("button_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>dns</span>
                  </span>
                  <span key={uuid()}>FIELDS</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>filter_list</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>more_vert</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </div>
            <div className={classes("row-layout group_3")}>
              <div className={classes("column-layout group_4")}>
                <div className={classes("column-layout group_5")}>
                  <div className={classes("column-layout group_6")}>
                    <h6 className={classes("content_2")}>
                      <span>Developer Tools</span>
                    </h6>
                    <p className={classes("typography__subtitle-2 content_2")}>
                      <span>Release 2020.2</span>
                    </p>
                  </div>
                  <IgrList className={classes("list_1")}>
                    <div style={{display: 'contents'}} onClick={() => editTaskDialog?.current?.toggle()} key={uuid()}>
                      <IgrListItem>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/Avatar1.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Download any Ultimate product and take notes on the download process</div>
                        <div slot="subtitle" key={uuid()}>Product download process experience</div>
                        <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>edit</span>
                        </span>
                      </IgrListItem>
                    </div>
                    <div style={{display: 'contents'}} onClick={() => editTaskDialog?.current?.toggle()} key={uuid()}>
                      <IgrListItem>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Report about the downloaded ultimate products to the Marketing Team</div>
                        <div slot="subtitle" key={uuid()}>Product download process experience</div>
                        <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>edit</span>
                        </span>
                      </IgrListItem>
                    </div>
                  </IgrList>
                  <IgrButton variant="flat" clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>add</span>
                    </span>
                    <span key={uuid()}>task</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div className={classes("column-layout group_5")}>
                  <div className={classes("column-layout group_7")}>
                    <h6 className={classes("content_2")}>
                      <span>App Builder</span>
                    </h6>
                    <p className={classes("typography__subtitle-2 content_2")}>
                      <span>September release - Sprint 1</span>
                    </p>
                  </div>
                  <IgrList className={classes("list_1")}>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Research new sample app</div>
                      <div slot="subtitle" key={uuid()}>New sample application</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>edit</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Create visual design for new sample app</div>
                      <div slot="subtitle" key={uuid()}>New sample application</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>edit</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Implementation for new sample app</div>
                      <div slot="subtitle" key={uuid()}>New sample application</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>edit</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Tweaks in List component</div>
                      <div slot="subtitle" key={uuid()}>App Builder UI Components</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>edit</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar1.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>QE of new App Builder components</div>
                      <div slot="subtitle" key={uuid()}>App Builder UI Components</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>edit</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar4.png" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Implementation of Chips component</div>
                      <div slot="subtitle" key={uuid()}>App Builder UI Components</div>
                      <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>edit</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <IgrButton variant="flat" clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>add</span>
                    </span>
                    <span key={uuid()}>task</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("column-layout group_8")}>
                <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("content_1")}></IgrCalendar>
                <div className={classes("column-layout group_5")}>
                  <h6 className={classes("content_2")}>
                    <span>Release Calendar</span>
                  </h6>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>App Builder</div>
                      <div slot="subtitle" key={uuid()}>Product download process experience</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div slot="title" key={uuid()}>Ultimate Products Review</div>
                      <div slot="subtitle" key={uuid()}>08.13.2020</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>error</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={editTaskDialog}>
          <h5 slot="title" key={uuid()}>
            <span>Edit Task</span>
          </h5>
          <div className={classes("column-layout group_9")} key={uuid()}>
            <IgrInput label="Task Name" outlined="false" value={value} change={(_c, e) => setValue(e.detail)} className={classes("user-input")}></IgrInput>
            <div className={classes("row-layout group_10")}>
              <span className={classes("material-icons icon_4")}>
                <span key={uuid()}>people</span>
              </span>
              <p className={classes("typography__body-1 text_1")}>
                <span>Assigned to:</span>
              </p>
              <IgrChip className={classes("content_1")}>
                <span slot="suffix" key={uuid()}>
                  <span className={classes("material-icons icon_5")} key={uuid()}>
                    <span key={uuid()}>clear</span>
                  </span>
                </span>
                <span key={uuid()}>Name Surname</span>
              </IgrChip>
            </div>
            <IgrTextarea label="Description" outlined="false" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("user-input")}></IgrTextarea>
            <div className={classes("row-layout group_11")}>
              <div className={classes("row-layout group_12")}>
                <div className={classes("row-layout group_13")}>
                  <span className={classes("material-icons icon_5")}>
                    <span key={uuid()}>attach_file</span>
                  </span>
                  <IgrChip className={classes("content_1")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_5")} key={uuid()}>
                        <span key={uuid()}>clear</span>
                      </span>
                    </span>
                    <span key={uuid()}>FileName</span>
                  </IgrChip>
                  <IgrChip className={classes("content_1")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_5")} key={uuid()}>
                        <span key={uuid()}>clear</span>
                      </span>
                    </span>
                    <span key={uuid()}>FileName</span>
                  </IgrChip>
                </div>
                <IgrButton variant="flat" className={classes("button_1")}>
                  <span key={uuid()}>Add Attachment</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div className={classes("row-layout group_13")}>
                <span className={classes("material-icons icon_5")}>
                  <span key={uuid()}>access_time</span>
                </span>
                <p className={classes("typography__body-1 content_2")}>
                  <span>Status</span>
                </p>
                <IgrBadge variant="success" className={classes("badge")}>
                  <span key={uuid()}>IN PROGRESS</span>
                </IgrBadge>
              </div>
            </div>
            <div className={classes("row-layout group_14")}>
              <IgrButton variant="flat" clicked={() => editTaskDialog?.current?.toggle()} className={classes("button_1")}>
                <span key={uuid()}>CANCEL</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton clicked={() => editTaskDialog?.current?.toggle()} className={classes("button_1")}>
                <span key={uuid()}>UPDATE</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div slot="footer" key={uuid()}></div>
        </IgrDialog>
        <IgrDialog closeOnOutsideClick="true" ref={newTaskDialog1}>
          <h5 slot="title" key={uuid()}>
            <span>New Task</span>
          </h5>
          <div className={classes("row-layout group_7")} key={uuid()}>
            <div className={classes("column-layout group_15")}>
              <IgrInput label="Task Name" outlined="false" className={classes("user-input")}></IgrInput>
              <div className={classes("row-layout group_16")}>
                <span className={classes("material-icons icon_6")}>
                  <span key={uuid()}>people</span>
                </span>
                <IgrButton variant="flat" className={classes("button_1")}>
                  <span key={uuid()}>ASSIGN</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <IgrTextarea label="Add Description" outlined="false" className={classes("user-input")}></IgrTextarea>
              <div className={classes("row-layout group_11")}>
                <div className={classes("row-layout group_13")}>
                  <span className={classes("material-icons icon_5")}>
                    <span key={uuid()}>attach_file</span>
                  </span>
                  <IgrButton variant="flat" className={classes("button_1")}>
                    <span key={uuid()}>Add Attachment</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
                <div className={classes("row-layout group_13")}>
                  <span className={classes("material-icons icon_5")}>
                    <span key={uuid()}>access_time</span>
                  </span>
                  <p className={classes("typography__body-1 content_2")}>
                    <span>Status</span>
                  </p>
                  <IgrBadge className={classes("badge")}>
                    <span key={uuid()}>TO DO</span>
                  </IgrBadge>
                </div>
              </div>
              <div className={classes("row-layout group_14")}>
                <IgrButton variant="flat" clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button_1")}>
                  <span key={uuid()}>CANCEL</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button_1")}>
                  <span key={uuid()}>CREATE</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}></div>
        </IgrDialog>
        <IgrButton variant="fab" clicked={() => newTaskDialog1?.current?.toggle()} className={classes("button_2")}>
          <span className={classes("material-icons")} key={uuid()}>
            <span key={uuid()}>add</span>
          </span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </div>
    </>
  );
}
