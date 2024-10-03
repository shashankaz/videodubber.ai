import { Button, Container, Text, Title } from '@mantine/core';
import Navbar from '../Navbar/Navbar';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Container className={styles.hero}>
        <Title order={1}>Audio Cutter</Title>
        <Text size="xl" mt="md">
          Free editor to trim and cut any audio file online
        </Text>
        <Button variant="outline" size="md" radius="xl" className={styles.button} mt="lg">
          Browse my files
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
