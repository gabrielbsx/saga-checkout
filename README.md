# Saga Payment Checkout Application

This is a payment checkout application developed using .NET Core and AngularJS. It provides a user-friendly interface for processing payments and handling checkout workflows.

## Features

- Product selection: Users can browse and select products for purchase.
- Cart management: Users can add products to their shopping cart, update quantities, and remove items.
- Payment processing: Integration with payment gateways for secure and reliable payment processing.
- Order management: Users can view their order history and track the status of their purchases.

## Technologies Used

- .NET Core: A cross-platform framework for building web applications using C#.
- AngularJS: A JavaScript framework for building dynamic web applications.
- Bootstrap: A popular CSS framework for creating responsive and visually appealing UI.
- SQL Server: A relational database management system used for data storage.

## Setup Instructions

1. Clone the repository: `git clone https://github.com/gabrielbsx/saga-checkout.git`
2. Navigate to the backend directory: `cd saga-checkout/backend`
3. Install the required dependencies: `dotnet restore`
4. Configure the database connection in the `appsettings.json` file.
5. Run the database migrations: `dotnet ef database update`
6. Start the backend server: `dotnet run`
7. Open a new terminal and navigate to the frontend directory: `cd ../ClientApp`
8. Install the required dependencies: `npm install`
9. Start the frontend application: `npm start`

Make sure to configure the appropriate API endpoints and credentials for your payment gateway provider in the backend code.

## Developer

- Gabriel Barbosa Silva