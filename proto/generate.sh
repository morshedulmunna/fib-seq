#!/bin/bash

# Generate code for Worker Service
protoc --go_out=../worker --go-grpc_out=../worker ./fibo.proto

# Generate code for Server Service
protoc --go_out=../server --go-grpc_out=../server ./fibo.proto

