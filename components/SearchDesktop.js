import Image from "next/image";
import NextLink from "next/link";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from "@material-ui/core";

const SearchDesktop = ({ searchInput, value }) => {
  return (
    <div className=" hidden sm:flex  flex-col rounded-b-xl px-2 items-center bg-white  mx-2 shadow-sm  list-none ">
      <div className=" overflow-scroll scrollbar-hide">
        <Grid item md={9} xs={12}>
          <TableContainer>
            <Table>
              {/* <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead> */}
              <TableBody>
                {searchInput.slice(0, 5).map((value) => (
                  <TableRow key={value._id}>
                    <TableCell>
                      <NextLink href={`/product/${value.slug}`} passHref>
                        <Link>
                          <Image
                            src={value.image}
                            alt={value.name}
                            width={50}
                            height={50}
                          ></Image>
                        </Link>
                      </NextLink>
                    </TableCell>

                    <TableCell>
                      <NextLink href={`/product/${value.slug}`} passHref>
                        <Link>
                          <Typography>{value.name}</Typography>
                        </Link>
                      </NextLink>
                    </TableCell>
                    <TableCell align="right">
                      <Select
                        value={value.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(value.countInStock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell align="right">${value.price}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        className="button"
                        color="primary"
                      >
                        ---
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    </div>
  );
};

export default SearchDesktop;
