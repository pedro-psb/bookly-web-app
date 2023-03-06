import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { renderPage } from "../../components/utils/utils";

function Page() {
  return (
    <Container
      size={420}
      my={40}
      sx={(theme) => ({
        textAlign: "left",
      })}
    >
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome to Bookly!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" component="a" href="/login">
          Login
        </Anchor>
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        // sx={(theme) => ({
        //   width: 600,
        // })}
      >
        <TextInput label="First Name" placeholder="Douglas" required mt="md" />
        <TextInput label="Last Name" placeholder="Adams" required mt="md" />
        <Divider my={20} />
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          mt="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <PasswordInput
          label="Password again"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Register
        </Button>
      </Paper>
    </Container>
  );
}

renderPage(<Page />, false);
