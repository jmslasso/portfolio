const ParticlesConfig={
        "fullScreen": {
          "zIndex": -1
        },
        "interactivity": {
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": "#repulse-div",
              "mode": "repulse"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "force": 60
              }
            }
          },
          "modes": {
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 0.8,
              "size": 40
            },
            "grab": {
              "distance": 400
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": {
              "value": "#000"
            },
            "distance": 150,
            "opacity": 0.4
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "enable": true,
            "path": {},
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "spin": {}
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 80
          },
          "opacity": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 0.1,
              "max": 1
            },
            "animation": {
              "enable": true,
              "speed": 1,
              "minimumValue": 0.2
            }
          },
          "rotate": {
            "random": {
              "enable": true
            },
            "animation": {
              "enable": true,
              "speed": 5
            },
            "direction": "random"
          },
          "shape": {
            "options": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "char": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "polygon": {
                "sides": 5
              },
              "star": {
                "sides": 5
              },
              "image": [
                {
                  "src": "./images/html.png",
                  "width": 24,
                  "height": 24
                },
                {
                  "src": "./images/css.png",
                  "width": 24,
                  "height": 24
                },
                {
                  "src": "./images/java.png",
                  "width": 32,
                  "height": 32
                },
                {
                  "src": "./images/atom.png",
                  "width": 32,
                  "height": 32
                },
                {
                  "src": "./images/mysql.png",
                  "width": 32,
                  "height": 32
                },
                {
                  "src": "./images/python.png",
                  "width": 32,
                  "height": 32
                },
              ]
            },
            "type": "image"
          },
          "size": {
            "value": 16,
            "animation": {
              "speed": 40,
              "minimumValue": 0.1
            }
          },
          "stroke": {
            "color": {
              "value": "#000000",
              "animation": {
                "h": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "sync": true
                },
                "s": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "sync": true
                },
                "l": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "sync": true
                }
              }
            }
          }
        }
}

export default ParticlesConfig