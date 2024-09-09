import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrList, IgrListHeader, IgrListHeaderModule, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrTab, IgrTabPanel, IgrTabs, IgrTabsModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useState } from 'react';
import { useGetCustomers, useGetEmployees, useGetOrders, useGetSuppliers } from '../../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './backlog.module.css';
import createClassTransformer from '../../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrGridModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrListHeaderModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrTabsModule.register();

export default function Backlog() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [groupVisible, setGroupVisible] = useState<boolean | undefined>(false);
  const { northwindOrders } = useGetOrders();
  const { northwindCustomers } = useGetCustomers();
  const { northwindEmployees } = useGetEmployees();
  const { northwindSuppliers } = useGetSuppliers();

  return (
    <>
      <div className={classes("row-layout backlog-container")}>
        <div className={classes("column-layout left-nav")}>
          <h6 className={classes("h6")}>
            <span>Backlog</span>
          </h6>
          <IgrList className={classes("list")}>
            <IgrListHeader key={uuid()}>
              <div key={uuid()}>INDIGO.DESIGN</div>
            </IgrListHeader>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Growth Hacking</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar className={classes("avatar_1")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Public Preview</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar className={classes("avatar_2")} key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                </IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>UX Feedback</div>
            </IgrListItem>
          </IgrList>
          <IgrButton variant="flat" className={classes("button")}>
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>add</span>
            </span>
            <span key={uuid()}>ADD NEW PROJECT</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
        <div className={classes("row-layout right-container")}>
          <div className={classes("column-layout content")}>
            <div className={classes("row-layout content-toolbar")}>
              <h5 className={classes("h5")}>
                <span>Growth Hacking</span>
              </h5>
              <div className={classes("row-layout group")}>
                <IgrButton variant="flat" className={classes("button_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>settings</span>
                  </span>
                  <span key={uuid()}>Settings</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrIconButton variant="flat" clicked={() => setGroupVisible(!groupVisible)} className={classes("icon-button icon-button_2")}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>filter_list</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </div>
            {groupVisible && (
              <div className={classes("row-layout filters")}>
                <div className={classes("row-layout group_1")}>
                  <IgrInput label="Filter by keyword" outlined="false" className={classes("input")}></IgrInput>
                </div>
                <div className={classes("row-layout group_2")}>
                  <IgrButton variant="flat" className={classes("button_1")}>
                    <span key={uuid()}>Assigned to</span>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" className={classes("button_1")}>
                    <span key={uuid()}>Iteration</span>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" className={classes("button_1")}>
                    <span key={uuid()}>Area</span>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrIconButton variant="flat" clicked={() => setGroupVisible(!groupVisible)} className={classes("icon-button_1")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>close</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </div>
            )}
            <IgrTabs className={classes("tabs")}>
              <IgrTab selected="true" key={uuid()}>
                <span key={uuid()}>Q1</span>
              </IgrTab>
              <IgrTabPanel className={classes("column-layout tab-item-content")} key={uuid()}>
                <IgrGrid data={northwindOrders} primaryKey="employeeID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="orderID" dataType="number" header="orderID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shippedDate" dataType="date" header="shippedDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipVia" dataType="number" header="shipVia" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="freight" dataType="number" header="freight" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipName" dataType="string" header="shipName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipAddress.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipAddress.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipAddress.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipAddress.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="shipAddress.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                </IgrGrid>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span key={uuid()}>Q2</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}>
                <IgrGrid data={northwindCustomers} primaryKey="customerID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid_1")}>
                  <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
                </IgrGrid>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span key={uuid()}>Q3</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}>
                <IgrGrid data={northwindEmployees} primaryKey="employeeID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid_1")}>
                  <IgrColumn field="lastName" dataType="string" header="lastName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="firstName" dataType="string" header="firstName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="title" dataType="string" header="title" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="managerID" dataType="number" header="managerID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="notes" dataType="string" header="notes" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable="true" selectable="false"></IgrColumn>
                </IgrGrid>
              </IgrTabPanel>
              <IgrTab disabled="true" key={uuid()}>
                <span key={uuid()}>Q4</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}>
                <IgrGrid data={northwindSuppliers} primaryKey="supplierID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid_1")}>
                  <IgrColumn field="supplierID" dataType="number" header="supplierID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
                </IgrGrid>
              </IgrTabPanel>
            </IgrTabs>
          </div>
        </div>
      </div>
    </>
  );
}
