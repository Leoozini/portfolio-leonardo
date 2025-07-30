// app/frontend/src/data/mock.js

export const mockData = {
  hero: {
    name: "Leonardo dos Santos Souza",
    title: "Data Analyst & Economics Student",
    description:
      "Passionate about transforming raw data into actionable insights. Combining economic theory with modern data analysis tools to drive business decisions and financial strategies.",
  },

  about: {
    bio:
      "As an Economics student with a strong passion for data analysis, I bridge the gap between economic theory and practical business applications. My journey in data began with Excel and has evolved to include advanced analytics tools like Power BI, with ongoing studies in Python, SQL, and R.",
    goals:
      "My goal is to leverage data science methodologies to solve complex financial and economic challenges. I'm particularly interested in financial analytics, market research, and business intelligence that drives strategic decision-making.",
    interests: [
      "Financial Modeling",
      "Market Analysis",
      "Business Intelligence",
      "Economic Research",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },

  skills: {
    technical: [
      { name: "Power BI", level: 85, color: "orange" },
      { name: "Excel", level: 90, color: "green" },
      { name: "R Programming", level: 70, color: "purple" },
      { name: "Python", level: 45, color: "blue" },
      { name: "SQL", level: 40, color: "slate" },
    ],
    tools: [
      { name: "Microsoft Office", level: 95, color: "blue" },
      { name: "Power Query", level: 80, color: "orange" },
      { name: "DAX", level: 75, color: "green" },
      { name: "Statistical Software", level: 65, color: "purple" },
      { name: "Database Management", level: 55, color: "slate" },
    ],
    soft: [
      { name: "Analytical Thinking", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Team Collaboration", level: 85 },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Sales Performance Dashboard",
        description:
          "Comprehensive Power BI dashboard analyzing regional sales performance with KPIs, trend analysis, and forecasting capabilities. Includes interactive filters and drill-down functionality.",
        date: "Dec 2024",
        technologies: ["Power BI", "DAX", "Excel", "Power Query"],
        category: "Business Analytics",
      },
      {
        id: 2,
        title: "Financial Market Analysis",
        description:
          "Economic analysis of market trends using statistical methods. Examined correlation between economic indicators and market performance using Excel advanced functions.",
        date: "Nov 2024",
        technologies: ["Excel", "Statistical Analysis", "Data Modeling"],
        category: "Financial Analysis",
      },
      {
        id: 3,
        title: "Customer Segmentation Study",
        description:
          "Power BI project segmenting customers based on purchasing behavior. Created automated reports with customer lifetime value calculations and retention metrics.",
        date: "Oct 2024",
        technologies: ["Power BI", "DAX", "Customer Analytics"],
        category: "Business Intelligence",
      },
      {
        id: 4,
        title: "Budget vs Actual Analysis",
        description:
          "Dynamic Excel model comparing budget forecasts against actual performance. Includes variance analysis and automated reporting with conditional formatting.",
        date: "Sep 2024",
        technologies: ["Excel", "Financial Modeling", "VBA"],
        category: "Financial Planning",
      },
      {
        id: 5,
        title: "Regional Economic Indicators",
        description:
          "Research project analyzing regional economic development indicators. Used statistical methods to identify correlations and trends in economic data.",
        date: "Aug 2024",
        technologies: ["Excel", "Statistical Analysis", "Economic Research"],
        category: "Economic Research",
      },
      {
        id: 6,
        title: "Supply Chain Analytics",
        description:
          "Power BI dashboard tracking supply chain KPIs including inventory turnover, supplier performance, and cost analysis with automated alerts for critical metrics.",
        date: "Jul 2024",
        technologies: ["Power BI", "Supply Chain", "KPI Tracking"],
        category: "Operations Analytics",
      },
    ],
  },

  codeRepository: {
    codes: [
      {
        id: 1,
        title: "Financial Ratio Calculator",
        language: "Python",
        description:
          "Python script for calculating key financial ratios including liquidity, profitability, and leverage ratios from financial statements.",
        tags: ["Finance", "Ratios", "Analysis"],
        preview: `def calculate_current_ratio(current_assets, current_liabilities):
    """Calculate current ratio"""
    return current_assets / current_liabilities

def calculate_roa(net_income, total_assets):
    """Calculate Return on Assets"""
    return (net_income / total_assets) * 100

# Example usage
current_ratio = calculate_current_ratio(150000, 75000)
print(f"Current Ratio: {current_ratio:.2f}")`,
      },
      {
        id: 2,
        title: "Sales Data Query",
        language: "SQL",
        description:
          "SQL queries for extracting and analyzing sales data with various aggregations and joins across multiple tables.",
        tags: ["Sales", "Aggregation", "Joins"],
        preview: `SELECT 
    p.product_name,
    SUM(s.quantity) as total_sold,
    AVG(s.unit_price) as avg_price,
    SUM(s.quantity * s.unit_price) as revenue
FROM sales s
JOIN products p ON s.product_id = p.id
WHERE s.sale_date >= '2024-01-01'
GROUP BY p.product_name
ORDER BY revenue DESC;`,
      },
      {
        id: 3,
        title: "Market Analysis Visualization",
        language: "R",
        description:
          "R script for creating comprehensive market analysis visualizations including trend analysis and correlation matrices.",
        tags: ["Visualization", "Market Analysis", "Statistics"],
        preview: `library(ggplot2)
library(dplyr)

# Load market data
market_data <- read.csv("market_data.csv")

# Create trend visualization
ggplot(market_data, aes(x = date, y = price)) +
  geom_line(color = "blue", size = 1) +
  geom_smooth(method = "lm", color = "red") +
  labs(title = "Market Price Trends",
       x = "Date", y = "Price") +
  theme_minimal()`,
      },
      {
        id: 4,
        title: "Economic Indicators Dashboard",
        language: "Python",
        description:
          "Python dashboard using Plotly for visualizing economic indicators with interactive charts and real-time data updates.",
        tags: ["Dashboard", "Economics", "Plotly"],
        preview: `import plotly.dash as dash
import plotly.express as px
import pandas as pd

# Create dashboard app
app = dash.Dash(__name__)

# Load economic data
df = pd.read_csv('economic_data.csv')

# Create visualization
fig = px.line(df, x='date', y='gdp_growth', 
              title='GDP Growth Rate')

app.layout = html.Div([
    dcc.Graph(figure=fig)
])`,
      },
    ],
  },

  contact: {
    message:
      "I'm currently seeking opportunities in data analysis, business intelligence, and financial analytics. Whether you're looking for an intern, junior analyst, or have an interesting project to discuss, I'd love to hear from you!",
    email: "leonardo.silva@email.com",
    phone: "+55 (11) 99999-9999",
    location: "São Paulo, Brazil",
    linkedin: "https://linkedin.com/in/leonardo-silva",
    github: "https://github.com/leonardo-silva",
  },
};
