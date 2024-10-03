import { Container, Flex, Text } from '@mantine/core';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <Container fluid className={styles.navbar}>
      <Flex align="center" justify="center" gap="xl">
        <Text component="p">How it works</Text>
        <Text component="p">Joiner</Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
