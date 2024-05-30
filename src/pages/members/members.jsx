import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box,Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import MemberTable from './MembersTable';

// Sample data
const rows = [
  { id: 1, name: 'Dan Patra', status: 'Pending' },
  { id: 2, name: 'Guy Patitzer', status: 'Approved' },
  { id: 3, name: 'Kobi Maimon', status: 'Rejected' },
  // Add more items as needed
];

// Main component
export default function Standing() {
  return (
    <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Standings</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <MemberTable />
        </MainCard>
      </Grid>  
  );
}