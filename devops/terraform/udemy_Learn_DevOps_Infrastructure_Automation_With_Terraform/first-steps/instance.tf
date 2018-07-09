provider "aws" {
  access_key = "ACCESS_KEY_VALUE"
  secret_key = "SECRECT_KEY_VALUE"
  region     = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0d729a60"
  instance_type = "t2.micro"
}
