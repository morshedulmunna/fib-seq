package main

import "log/slog"

func main() {
	slog.Info("something")
	slog.Error("something went wrong")
	slog.Warn("this is a warning")
	slog.Debug("something went wrong")
}
