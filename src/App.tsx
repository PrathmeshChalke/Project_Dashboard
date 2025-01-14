import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import {
  LineChart,
  PieChart,
  DoughnutChart,
  ProgressChart,
} from "./components/Charts";
import {
  faUsers,
  faUtensils,
  faUserCheck,
  faStar,
  faBuilding,
  faMap,
  faSearch,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mantine/core/styles.css";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 bg-light min-vh-100">
        <Container fluid className="p-4">
          <Row className="g-4 mb-4">
            <Col md={3} sm={3}>
              <StatCard
                title="Total Registered Users"
                value="1000"
                change="+20.1% from last month"
                icon={faUsers}
                iconColor="#4C6FFF"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="Total Restaurants"
                value="2350"
                change="+15% from last month"
                icon={faUtensils}
                iconColor="#FF6B6B"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="Active Users"
                value="12"
                change="+18% from last month"
                icon={faUserCheck}
                iconColor="#51CF66"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="Popular Restaurants"
                value="573"
                change="+21 since last hour"
                icon={faStar}
                iconColor="#FAB005"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="Most User Cities/Area"
                value="210"
                change="+10 since last hour"
                icon={faMap}
                iconColor="#4C6FFF"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="Top Restaurants Category"
                value="590"
                change="+45 since last hour"
                icon={faBuilding}
                iconColor="#FF6B6B"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="Most Search Queries"
                value="1000"
                change="+203 since last hour"
                icon={faSearch}
                iconColor="#51CF66"
              />
            </Col>
            <Col md={3}>
              <StatCard
                title="User Engagement Stats"
                value="10"
                change="+2 since last hour"
                icon={faUserCog}
                iconColor="#FAB005"
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              {/* <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="mb-4">User Growth Trends</h5> */}
              <Card className="shadow">
                <Card.Header>
                  <Card.Title>User Growth </Card.Title>
                </Card.Header>
                <Card.Body>
                  <LineChart />
                </Card.Body>
              </Card>
              {/* </div> */}
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow">
                <Card.Header>
                  <Card.Title>Restaurants Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <PieChart />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow">
                <Card.Header>
                  <Card.Title>Visitors</Card.Title>
                </Card.Header>
                <Card.Body>
                  <DoughnutChart />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow">
                <Card.Header>
                  <Card.Title>Active Users</Card.Title>
                </Card.Header>
                <Card.Body>
                  <ProgressChart progress={45} />
                </Card.Body>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
