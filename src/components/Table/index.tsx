import { ReactNode } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { data, type Person } from '@/components/Table/data';
import { Checkbox } from '@mui/material';

import './style.scss';

function TableComponent() {
  const columns: MRT_ColumnDef<Person>[] = [
    {
      enableSorting: false,
      header: '',
      Header(props) {
        return (
          <>
            <Checkbox
              indeterminate={props.table.getIsSomeRowsSelected()}
              checked={props.table.getIsAllRowsSelected()}
              onChange={() => props.table.toggleAllRowsSelected()}
            />
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
            <Checkbox
              indeterminate={props.row.getIsSomeSelected()}
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
          <div style={{ display: 'flex', marginLeft: 100 }}>
            <Checkbox
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
        columns={columns}
        data={data}
        enableColumnResizing
        enableGrouping
        enableStickyHeader
        enableColumnOrdering
        enableStickyFooter
        initialState={{
          grouping: ['state'],
          pagination: { pageIndex: 0, pageSize: 20 }
        }}
        muiToolbarAlertBannerChipProps={{ color: 'primary' }}
        muiTableContainerProps={{ sx: { maxHeight: 700 } }}
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
        enableRowSelection
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
