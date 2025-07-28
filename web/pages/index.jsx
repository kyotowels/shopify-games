import React, { useState, useEffect } from "react";
import {
  Page,
  Layout,
  Card,
  Button,
  Text,
  Badge,
  Stack,
  DataTable,
  ProgressBar,
  Icon,
} from "@shopify/polaris";
import { Analytics, Games, Settings, TrendingUp } from "@shopify/polaris-icons";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalGames: 0,
    totalWins: 0,
    conversionRate: 0,
    revenueIncrease: 0,
  });

  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    // Mock data - replace with actual API calls
    setStats({
      totalGames: 1247,
      totalWins: 892,
      conversionRate: 71.5,
      revenueIncrease: 23.4,
    });

    setRecentGames([
      {
        id: 1,
        customer: "john@example.com",
        game: "Spin the Wheel",
        prize: "10% OFF",
        value: "$15.20",
        date: "2024-01-15",
      },
      {
        id: 2,
        customer: "sarah@example.com",
        game: "Scratch Card",
        prize: "Free Shipping",
        value: "$8.50",
        date: "2024-01-15",
      },
      {
        id: 3,
        customer: "mike@example.com",
        game: "Lottery",
        prize: "5% OFF",
        value: "$12.30",
        date: "2024-01-14",
      },
    ]);
  }, []);

  const rows = recentGames.map((game) => [
    game.customer,
    game.game,
    game.prize,
    game.value,
    game.date,
  ]);

  return (
    <Page title="Checkout Games Dashboard">
      <Layout>
        {/* Stats Cards */}
        <Layout.Section>
          <Card>
            <Layout>
              <Layout.Section oneHalf>
                <Stack vertical spacing="tight">
                  <Text variant="headingMd" as="h2">
                    Total Games Played
                  </Text>
                  <Text variant="headingLg" as="p">
                    {stats.totalGames.toLocaleString()}
                  </Text>
                  <Badge status="success">+12% from last month</Badge>
                </Stack>
              </Layout.Section>
              <Layout.Section oneHalf>
                <Stack vertical spacing="tight">
                  <Text variant="headingMd" as="h2">
                    Total Wins
                  </Text>
                  <Text variant="headingLg" as="p">
                    {stats.totalWins.toLocaleString()}
                  </Text>
                  <Badge status="success">+8% from last month</Badge>
                </Stack>
              </Layout.Section>
            </Layout>
          </Card>
        </Layout.Section>

        {/* Conversion and Revenue */}
        <Layout.Section>
          <Layout>
            <Layout.Section oneHalf>
              <Card>
                <Stack vertical spacing="tight">
                  <Text variant="headingMd" as="h2">
                    Conversion Rate
                  </Text>
                  <Text variant="headingLg" as="p">
                    {stats.conversionRate}%
                  </Text>
                  <ProgressBar progress={stats.conversionRate / 100} />
                </Stack>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card>
                <Stack vertical spacing="tight">
                  <Text variant="headingMd" as="h2">
                    Revenue Increase
                  </Text>
                  <Text variant="headingLg" as="p">
                    +{stats.revenueIncrease}%
                  </Text>
                  <Badge status="success">$2,847 additional revenue</Badge>
                </Stack>
              </Card>
            </Layout.Section>
          </Layout>
        </Layout.Section>

        {/* Quick Actions */}
        <Layout.Section>
          <Card>
            <Stack distribution="fillEvenly">
              <Button
                icon={Games}
                primary
                url="/app/games"
              >
                Manage Games
              </Button>
              <Button
                icon={Analytics}
                url="/app/analytics"
              >
                View Analytics
              </Button>
              <Button
                icon={Settings}
                url="/app/settings"
              >
                App Settings
              </Button>
            </Stack>
          </Card>
        </Layout.Section>

        {/* Recent Games */}
        <Layout.Section>
          <Card title="Recent Games">
            <DataTable
              columnContentTypes={[
                'text',
                'text',
                'text',
                'numeric',
                'text',
              ]}
              headings={[
                'Customer',
                'Game',
                'Prize',
                'Value',
                'Date',
              ]}
              rows={rows}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
} 