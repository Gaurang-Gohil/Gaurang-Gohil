resource "aws_instance" "example" {
  ami           = "ami-0cae6d6fe6048ca2c"
  instance_type = "t2.micro"

  vpc_security_group_ids  = ["sg-0021285b1c2771d95"]

  root_block_device {
    volume_size = 8
    volume_type = "gp2"
    delete_on_termination = true
  }

  tags = {
    Name = "example-instance-1"
  }
}