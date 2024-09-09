import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { IgrList, IgrListItem, IgrListModule } from 'igniteui-react';
import { useGetCustomerList, useGetCustomerOrdersResultList } from '../../hooks/northwind-cloud-hooks';
import 'igniteui-react-grids/grids';
import styles from './customer-orders.module.css';
import createClassTransformer from '../../style-utils';

IgrGridModule.register();
IgrListModule.register();

export default function CustomerOrders() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindCloudCustomer } = useGetCustomerList();
  const { northwindCloudCustomerOrdersResult } = useGetCustomerOrdersResultList(undefined);

  return (
    <>
      <div className={classes("row-layout customer-orders-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            {northwindCloudCustomer?.map((item) => (
              <IgrListItem key={uuid()}>
                <div slot="title" key={uuid()}>{item.companyName}</div>
                <div slot="subtitle" key={uuid()}>{item.contactName}</div>
              </IgrListItem>
            ))}
          </IgrList>
        </div>
        <div className={classes("column-layout group_1")}>
          <IgrGrid data={northwindCloudCustomerOrdersResult} primaryKey="orderID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
            <IgrColumn field="orderID" dataType="number" header="orderID" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shippedDate" dataType="date" header="shippedDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipVia" dataType="number" header="shipVia" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="freight" dataType="number" header="freight" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipName" dataType="string" header="shipName" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipAddress" dataType="string" header="shipAddress" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipCity" dataType="string" header="shipCity" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipRegion" dataType="string" header="shipRegion" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipPostalCode" dataType="string" header="shipPostalCode" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="shipCountry" dataType="string" header="shipCountry" sortable="true" selectable="false"></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
