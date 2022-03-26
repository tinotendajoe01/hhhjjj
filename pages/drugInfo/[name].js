import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";

import db from "../../utils/db";
import axios from "axios";
import { Store } from "../../utils/Store";
import { getError } from "../../utils/error";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import Header from "../../components/Header";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Drug from "../../models/Drug";
export default function DruInfoScreen({ drug }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  if (!drug) {
    return <div>Drug Not Found</div>;
  }

  return (
    <>
      <Header />
      <Layout title={drug.name} description={drug.description}>
        <main className="max-w-7xl mx-auto">
          <div className="hover:animate-pulse mt-5 ">
            <NextLink href="/" passHref>
              <Link>
                <ArrowLeftIcon className="h-6 text-kenlink_blue-dark" />
              </Link>
            </NextLink>
          </div>
          <div>
            <div>
              <div>
                <Image
                  src={drug.image}
                  alt={drug.name}
                  width={640}
                  height={640}
                  layout="responsive"
                  className="scale cursor-pointer"
                />
              </div>
            </div>
            <div>
              <List>
                <ListItem>
                  <Typography component="h1" variant="h4">
                    {drug.name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>CATEGORY: {drug.category}</Typography>
                </ListItem>
                <ListItem>
                  <Typography> DESCRIPTION: {drug.description}</Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography> ADVERSE EFFECTS: {drug.description}</Typography>
                </ListItem>
              </List>
            </div>
            <div>
              <Card>
                <List>
                  {" "}
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Drug</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          {drug.isAvailable > 0 ? "Available" : "Unavailable"}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>STANDARD DOSE</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{drug.standardDose}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>ADULT DOSE</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{drug.adultDose}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>KIDS DOSE</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{drug.kidsDose}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </List>
              </Card>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { name } = params;

  await db.connect();
  const drug = await Drug.findOne({ name }).lean();
  await db.disconnect();
  return {
    props: {
      drug: db.convertDocToObj(drug),
    },
  };
}
