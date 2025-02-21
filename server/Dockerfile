# ---- Stage 1: Build ----
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Install dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN go build -o worker-service ./cmd/main.go

# ---- Stage 2: Run ----
FROM alpine:latest

WORKDIR /app

# Install CA certificates
RUN apk --no-cache add ca-certificates

# Copy compiled binary from builder
COPY --from=builder /app/worker-service .

# Set non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose gRPC port
EXPOSE 50051

# Run the application
CMD ["./worker-service"]
