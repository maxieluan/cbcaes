package main

import (
	"crypto/md5"
	"crypto/sha256"
	"encoding/hex"
	"log"
	"os"
)

func return_key() string {
	key := os.Getenv("HUGO_ENCRYPTION_KEY")
	// check key, if not exist, raise error
	if key == "" {
		log.Fatal("HUGO_ENCRYPTION_KEY not set")
	}

	// sha256 of key
	hash := sha256.New()
	hash.Write([]byte(key))
	key = hex.EncodeToString(hash.Sum(nil))

	// md5 of the key
	hash = md5.New()
	hash.Write([]byte(key))
	key = hex.EncodeToString(hash.Sum(nil))

	return key
}
