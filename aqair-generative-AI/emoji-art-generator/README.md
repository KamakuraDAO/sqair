# Emoji Art Generator
アイコンから特定の絵を生成いたします。
![evolution1 (1)](https://github.com/KamakuraDAO/sqair/assets/31527310/1df7359a-e214-43dc-87f5-70b5c93e6837)

# Setup

* `conda env create`

# Usage

Prepare a target image (store it in `data/target_images/`) and a set of emojies/tiles (store them in `data/emoji/`). Then run the following command:

`python -m app.generator.generate`

```
usage: generate.py [--target TARGET]
                   [--fitness {RGBMSE,LABDeltaESSIM,LABMSE,LABDeltaE,SSIM}]
                  

optional arguments:
  --target TARGET       Filename of target image. Should reside in
                        data/target_images/
  --fitness {RGBMSE,LABDeltaESSIM,LABMSE,LABDeltaE,SSIM}
                        Choose fitness evaluator. See fitness.py for more
                        information.
```
