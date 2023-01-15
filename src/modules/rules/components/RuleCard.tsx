import { Col, Row, Typography } from "antd";
import IRule from "shared/types/rule.type";

interface RuleCardProps {
	rule: IRule
}
export default function RuleCard({ rule }: RuleCardProps) {

	const { Text, Title, Paragraph } = Typography

	return <Col>
		<Title level={3}>{rule.title}</Title>
		<Paragraph>{rule.entries}</Paragraph>
		<Text>{rule.source} p.{rule.pageNumber}</Text>
	</Col>
}