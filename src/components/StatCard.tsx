import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: IconDefinition;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  iconColor,
}) => {
  return (
    <Card
      className="shadow h-100 stat-card-hover"
      style={{ cursor: "pointer" }}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 className="text-muted mb-1">{title}</h6>
            <h3 className="mb-0">{value}</h3>
          </div>
          <div className={`rounded-circle p-3`}>
            <FontAwesomeIcon
              icon={icon}
              className="fa-lg"
              style={{ color: iconColor }}
            />
          </div>
        </div>
        <small className="text-success">{change}</small>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
