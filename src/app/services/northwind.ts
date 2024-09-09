import { CustomersType } from '../models/Northwind/customers-type';
import { EmployeesType } from '../models/Northwind/employees-type';
import { OrdersType } from '../models/Northwind/orders-type';
import { SuppliersType } from '../models/Northwind/suppliers-type';

export async function getOrders(): Promise<OrdersType[]> {
  const response = await fetch('../../static-data/northwind-orders-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getCustomers(): Promise<CustomersType[]> {
  const response = await fetch('../../static-data/northwind-customers-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getEmployees(): Promise<EmployeesType[]> {
  const response = await fetch('../../static-data/northwind-employees-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getSuppliers(): Promise<SuppliersType[]> {
  const response = await fetch('../../static-data/northwind-suppliers-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
