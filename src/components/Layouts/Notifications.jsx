import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { Stack, Divider, Box, Heading, Text } from "@chakra-ui/core";

const Notifications = () => {
  useFirestoreConnect([
    { collection: "notifications", orderBy: ["time", "desc"] },
  ]);

  const notifications = useSelector(
    (state) => state.firestore.ordered.notifications
  );
  return (
    <Box justify="center" align="center">
      <Heading my={8} textAlign="center" as="h5">
        Notifications
      </Heading>

      <ul style={{ listStyleType: "none" }}>
        {notifications &&
          notifications.map((notification) => {
            return (
              <Box
                my={4}
                width="full"
                padding="2rem"
                mx={{ base: 2, md: 8 }}
                boxShadow="lg"
              >
                <li key={notification.id}>
                  <Stack isInline>
                    <span
                      style={{ marginRight: "0.5rem" }}
                      role="img"
                      aria-label="rocket"
                    >
                      🚀
                    </span>
                    <Text color="blue.300">{notification.user}</Text>
                    <Text> - {notification.content} </Text>
                  </Stack>
                  <Divider my={4} />
                  <Box>
                    <Text color="tomato">
                      {moment(notification.time.toDate()).fromNow()}{" "}
                    </Text>
                  </Box>
                </li>
              </Box>
            );
          })}
      </ul>
    </Box>
  );
};

export default Notifications;
