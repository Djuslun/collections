/* eslint-disable react/jsx-no-useless-fragment */
import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import EmptyState from 'components/emptyStates/emptyState';
import { ClientUrls } from 'ts/enums';
import { Item } from 'ts/interfaces';

function ItemTable({ items }: { items: Item[] }) {
    const navigate = useNavigate();
    return (
        <>
            {items.length ? (
                <TableContainer component={Paper} className="table-styles">
                    <MuiTable sx={{ minWidth: 640 }} aria-label="item table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Likes</TableCell>
                                <TableCell align="left">Created at</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((row) => (
                                <TableRow
                                    className="hover:bg-black hover:bg-opacity-10 transition-all cursor-pointer"
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                    }}
                                    key={row._id}
                                    onClick={() =>
                                        navigate(`${ClientUrls.item}/${row._id}`)
                                    }
                                >
                                    <TableCell align="left">
                                        <img src={row.imageUrl} alt="item" />
                                    </TableCell>
                                    <TableCell align="left">{row.title}</TableCell>
                                    <TableCell align="left">{row.likes.length}</TableCell>
                                    <TableCell align="left">
                                        {new Date(row.createdAt).toLocaleDateString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </MuiTable>
                </TableContainer>
            ) : (
                <EmptyState translationKey="item" />
            )}
        </>
    );
}

export default ItemTable;
