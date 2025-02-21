package redis

import (
	"context"
	"fmt"
	"log"

	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

// RedisClient represents the Redis client instance
type RedisClient struct {
	client *redis.Client
}

// NewClient initializes and returns a Redis client
func NewClient(addr_url string) *RedisClient {
	opt, err := redis.ParseURL(addr_url)
	if err != nil {
		log.Println(err.Error())
	}

	client := redis.NewClient(opt)

	fmt.Println("Connected to Redis!")
	return &RedisClient{client: client}
}

// Get retrieves the value of a key from Redis
func (r *RedisClient) Get(key string) (string, error) {
	val, err := r.client.Get(ctx, key).Result()
	if err != nil {
		return "", fmt.Errorf("could not get key %s: %v", key, err)
	}
	return val, nil
}

// Set sets a key-value pair in Redis
func (r *RedisClient) Set(key, value string) error {
	if err := r.client.Set(ctx, key, value, 0).Err(); err != nil {
		return fmt.Errorf("could not set key %s: %v", key, err)
	}
	return nil
}

// HSet sets a field-value pair in a Redis hash
func (r *RedisClient) HSet(hash, field, value string) error {
	if err := r.client.HSet(ctx, hash, field, value).Err(); err != nil {
		return fmt.Errorf("could not set field %s in hash %s: %v", field, hash, err)
	}
	return nil
}

// HGet retrieves the value of a field from a Redis hash
func (r *RedisClient) HGet(hash, field string) (string, error) {
	val, err := r.client.HGet(ctx, hash, field).Result()
	if err != nil {
		return "", fmt.Errorf("could not get field %s from hash %s: %v", field, hash, err)
	}
	return val, nil
}

// Close gracefully closes the Redis client
func (r *RedisClient) Close() error {
	if err := r.client.Close(); err != nil {
		return fmt.Errorf("could not close Redis client: %v", err)
	}
	fmt.Println("Redis connection closed!")
	return nil
}
