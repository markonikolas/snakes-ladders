# Snakes and ladders

The famous snakes and ladders game

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [Docker](https://docs.docker.com/get-docker/)

Build the image

```bash
docker build -t snakes-ladders . --target=dev
```

then run the container

```bash
docker run -p 8080:8080 -it --mount type=bind,source="$(pwd)",target=/usr/src/app snakes-ladders
```

## License

This project is licensed under the [GNU GPL](LICENSE) License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- Inspiration for this project is [this](https://www.codewars.com/kata/587136ba2eefcb92a9000027) kata on codewars
