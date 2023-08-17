# React Dynamic Nested Table

This is a table component that is so powerful to create a nested table, and also can filter(show-hide) columns.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/) to install react dynamic nested table.(please read the documentation first)

```bash
npm i react_dynamic_nested_table
npm i --save-dev @types/react_dynamic_nested_table  # Only for typescript
```

```bash
yarn add react_dynamic_nested_table
```

https://user-images.githubusercontent.com/83487057/201487770-3e2cdb5d-5d3a-4288-89a4-3c39d0f1724d.mov

<img width="1385" alt="Screenshot 2022-11-12 at 11 36 13 PM" src="https://user-images.githubusercontent.com/83487057/201488206-8c79113e-248e-4f37-949e-b47b3cbc838d.png">

## Usage

```
import MainTable, { FilterTableColumn } from 'react_dynamic_nested_table';

```

## How to use table component

```
How to use a simple table :

 const titles = [
      'Name',
      'Age',
      'Address',
      'Phone',
    ]

const data = [
      {
        name: 'John',
        age: 20,
        address: 'Jessore',
        phone: '123456789',

      },
      {
        name: 'Doe',
        age: 30,
        address: 'Dhaka',
        phone: '123456789',
      }
    ]

<MainTable data={data} titles={titles} />
```

```
How to use dynamic table :

 const titles = [
      'Name',
      'Age',
      'Address',
      'Phone',
    ]

const data = [
      {
        name: 'John',
        age: 20,
        address: 'Jessore',
        phone: '123456789',

      },
      {
        name: 'Doe',
        age: 30,
        address: 'Dhaka',
        phone: '123456789',
      }
    ]

const newData = data?.map((item) => {
      return {
        name: item.name,
        age: item.age,
        address: item.address,
        phone: item.phone
      }
    }

<MainTable data={newData} titles={titles} />
```

```
How to use Filter in a table :

 const titles = [
      'Name',
      'Age',
      'Address',
      'Phone',
    ]

const [columnPreviousDataId, setColumnPreviousDataId] = React.useState("");
const [columnPreviousData, setColumnPreviousData] = React.useState([]);
const [tableTitles, setTableTitles] = React.useState([...titles]);
const [isShowTableColumn, setIsShowTableColumn] = React.useState({
      Name: true,
      Age: true,
      Address: true,
      Phone: true
    });

<!-- N.B: make sure the title name, and table column condition name are the same. Don't use something like this to name your_name. Use instead YourName.It will generate a table header Like this (Your Name) -->

const data = [
      {
        name: 'John',
        age: 20,
        address: 'Jessore',
        phone: '123456789',

      },
      {
        name: 'Doe',
        age: 30,
        address: 'Dhaka',
        phone: '123456789',
      }
    ]

const newData = data?.map((item) => {
      return {
        ...isShowTableColumn.Name && { Name: item.name },
        ...isShowTableColumn.Age && { Age: item.age },
        ...isShowTableColumn.Address && { Address: item.address },
        ...isShowTableColumn.Phone && { Phone: item.phone },
      }
    }

const handleFilterPostData = async (columndata) => {
      // console.log(columnData)
      //post and put column data from here
    }

<!-- you can get data from API and set your state to use -->

<!-- use this component to add a filter. You can use it and dialog/modal with the button if you want -->

 <FilterTableColumn
            tableTitles={tableTitles}
            setTableTitles={setTableTitles}
            isShowTableColumn={isShowTableColumn}
            setIsShowTableColumn={setIsShowTableColumn}
            titles={titles}
            handlePostData={handlePostData}
          />

<!-- table component with filter true props to add filter -->

<MainTable data={newData} titles={titles} filter={true} />`
```

```bash

## Available table props are

| Props             | Types   | Default Value      | Description              |
| ----------------- | ------- | ------------------ | ------------------------ |
| data              | Array   | []                 | Data for table.          |
| titles            | Array   | []                 | Table header title.      |
| filter            | Boolean | false              | Filter table column.     |
| tableHeaderDesign | Object  | {color: '#202b56'} | Table header design.     |
| align             | String  | left               | Table header text align. |
| style             | Object  | {}                 | Table style.             |

## Available filter props are

| Props                | Types   | Default Value | Description             |
| -------------------- | ------- | ------------- | ----------------------- |
| tableTitles          | Array   | []            | Table header title.     |
| setTableTitles       | Func    |               | Set table header title. |
| isShowTableColumn    | Boolean | true          | Show table column.      |
| setIsShowTableColumn | Func    |               | Set show table column.  |
| titles               | Array   | []            | Table header title.     |
| handlePostData       | Func    |               | Handle post data.       |

```
