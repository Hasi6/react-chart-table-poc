import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { data, type Person } from '@/components/Table/data';

import './style.scss';
import { ReactNode } from 'react';

function TableComponent() {
  const columns: MRT_ColumnDef<Person>[] = [
    {
      enableSorting: false,
      header: '',
      Header(props) {
        return (
          <>
            <input type="checkbox" onChange={() => props.table.toggleAllRowsExpanded()} />
          </>
        );
      },
      accessorKey: 'state',
      // accessorFn: (row) => <span style={{ color: 'pink' }}>{row.state}</span>,
      getGroupingValue(row) {
        return row.state;
      },
      GroupedCell(props) {
        return (
          <div style={{ display: 'flex' }}>
            <input
              type="checkbox"
              checked={props.row.getIsAllSubRowsSelected()}
              onChange={() => props.row.toggleSelected()}
            />
            <p onClick={() => props.row.toggleSelected()}>
              {props.cell.getValue() as ReactNode}({props.row.getLeafRows().length})
            </p>
            <p style={{ marginLeft: 10 }} onClick={() => props.row.toggleExpanded()}>
              Expand
            </p>
          </div>
        );
      },
      Cell(props) {
        return <>{props.row.getLeafRows().length}</>;
      },
      PlaceholderCell(props) {
        return (
          <div style={{ display: 'flex' }}>
            <input
              type="checkbox"
              checked={props.row.getIsSelected()}
              onChange={() => props.row.toggleSelected()}
            />
            <p>{props.cell.getValue() as ReactNode}</p>
          </div>
        );
      }
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName'
    },
    {
      header: 'First Name',
      accessorKey: 'firstName'
    }
  ];

  return (
    <div>
      <h1>Table Component</h1>
      <MaterialReactTable
        muiTableHeadCellProps={{
          style: {
            background: '#575756',
            height: 2,
            padding: 5,
            paddingLeft: 10
          }
        }}
        muiTableBodyCellProps={{
          style: {
            height: 2,
            padding: 5,
            paddingLeft: 10
          }
        }}
        columns={columns}
        data={data}
        enableColumnResizing
        muiExpandAllButtonProps={{
          style: {
            display: 'none'
          }
        }}
        muiExpandButtonProps={{
          style: {
            display: 'none'
          }
        }}
        enableGrouping
        enableRowSelection
        initialState={{
          grouping: ['state'],
          pagination: {
            pageSize: 20,
            pageIndex: 1
          }
        }}
        muiSelectAllCheckboxProps={{
          style: {
            display: 'none'
          }
        }}
        muiSelectCheckboxProps={{
          style: {
            display: 'none'
          }
        }}
        muiTableContainerProps={{ sx: { maxHeight: 700 } }}
        onHoveredColumnChange={console.log}
        muiTopToolbarProps={{
          style: {
            display: 'none'
          }
        }}
      />
    </div>
  );
}

export default TableComponent;
