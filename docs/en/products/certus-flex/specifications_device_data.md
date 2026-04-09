---
title: Technical Specifications -  Device Data
summary: The device data of the {{ variables.product.name.en }} equipment.
authors:
    - Arnold Zueger
    - Reto Gyger
date: February 2026
docsite_url: https://docs.fgyger.com
role:
---

# Technical Specifications - Device Data

## Base Unit – General Data

### Physical Specifications

| Parameter | Specification |
|-----------|--------------|
| **External dimensions (L × W × H)** | 564 mm × 425 mm × 188 mm<br>(H + 20 mm for 70 mm of DWP) |
| **Weight** | 15.2 kg (without flasks and holder) |

### Axis Performance

| Axis | Rapid Traverse | Traverse Force |
|------|----------------|----------------|
| **X Axis** | 130 mm/s | 70 N |
| **Y Axis** | 55 mm/s | 126 N |
| **Z Axis** | 70 mm/s | 126 N |

### Electrical Specifications

| Parameter | Specification |
|-----------|--------------|
| **Voltage** | 88–264 VAC |
| **Frequency range** | 47–63 Hz |
| **Alternating current voltage** | <0.5 A / 240 VAC |
| **Inrush current** | **Cold start**: 40 A / 240 VAC<br>**Normal start**: 25 A for 5 ms / 240 VAC |
| **Socket** | C13, main switch with a 1 AT fuse |
| **Reactive power** | 23 W |
| **Operating power** | 40 W |
| **Heat dissipation** | 136 Btu/h |

## Ambient Conditions

|                                   |                        |
| --------------------------------: | ---------------------- |
|           **Ambient temperature** | 12°–30°C               |
|                  **Air humidity** | ~30%–70%               |
| **Maximum installation altitude** | 2000 m above sea level |

## Compressed Air

|                          |                                |
| -----------------------: | ------------------------------ |
|       **Input pressure** | 1.7–2 bar                      |
| **Volumetric flow rate** | Max. 6 l/min                   |
|         **Requirements** | Oil-free, dry, filtered (5 µm) |

## Dispensing Head

|                         |                                                            |
| ----------------------: | ---------------------------------------------------------- |
| **Dispensing channels** | 1 to 8 (1 medium/channel)                                  |
|            **Versions** | 5 channels; 8 channels; 4 channels (22°); 8 channels (22°) |

## Fluid and Supply

|                               |                                                                               |
| ----------------------------: | ----------------------------------------------------------------------------- |
| **Dispensing pressure range** | 0.051–1.0 bar                                                                 |
|       **Compressed air tube** | AD = Ø 3.17 mm; ID = Ø 1.58 mm; length = 400 mm                               |
|                **Fluid tube** |                                                                               |
|           **Filter (Option)** | Built-in filter (for the SMLD 300GC microvalve)                               |
|                **Waste tray** | With discharge function (tube ID = 9 mm)                                      |
|         **Dispensing fluids** | See [SMLD 300GC micro valve](assembly-and-operation.md#smld-300gc-micro-valve) |
| **Dead volume (Syringe kit)** | ≈ 120 µl                                                                      |
|  **Dead volume (Bottle kit)** | ≈ 1500 µl                                                                     |

## Well Plates

|                               |               |
| ----------------------------- | ------------- |
| **ANSI Default**              | 96, 384, 1536 |
| **Special formats**           | 24, 48, 3456  |
| **Customer-specific formats** | Possible      |
| **Available plate heights**   | Default: 3 - 50 mm <br> Special configuration: 3 - 75 mm |

## Dispensing Times (Examples)
* Serial mode; P = 0.3 bar; 
* Microvalve = SMLD 300GC

|                           |       |      |        |
| ------------------------: | ----- | ---- | ------ |
|           **Well plate**: | 96    | 384  | 1536   |
|      **Volume per well**: | 20 µl | 5 µl | 0.5 µl |
|  **Time with 1 channel**: | 21 s  | 50 s | 145 s  |
| **Time with 8 channels**: | 7 s   | 11 s | 27 s   |

### Performance Data

| Well Plate | Volume per Well | Time with 1 Channel | Time with 8 Channels |
|------------|----------------|---------------------|----------------------|
| **96** | 20 µl | 21 s | 7 s |
| **384** | 5 µl | 50 s | 11 s |
| **1536** | 0.5 µl | 145 s | 27 s |

## Micro valve and Dispensing

|                           |                                                                               |
| ------------------------- | ----------------------------------------------------------------------------- |
| **Dispensing volume:**    | See [SMLD 300GC micro valve](assembly-and-operation.md#smld-300gc-micro-valve) |
| **Accuracy**:             | See [SMLD 300GC micro valve](assembly-and-operation.md#smld-300gc-micro-valve) |
| **Dispensing steps:**     | Stepless                                                                      |
| **Dispensing principle:** | Contactless, "drop on demand"                                                 |

## Regulatory

| Standard | Status |
|----------|--------|
| **Authorizations, approvals:** | CE |