---
id: system-design-latency-throughput
title: Latency And Throughput
---

Latency and Throughput are the two important measures to measure the performance of the system. 

### Latency

Latency is specifically how long does it take to reach from one point to another point in the system. 

The time it takes for a certain operation to complete in a system. Most often this measure is a time duration, like milliseconds or seconds. You should know these orders of magnitude:
- Reading 1 MB from RAM: 250us (0.25 ms)
- Reading 1 MB from SSD: 1,000us (1 ms)
- Transfer 1 MB from Network: 10,000us (10 ms)
- Reading 1 MB from HDD: 20,000us (20 ms)
- Inter-Continental Round Trip: 150,000us (150 ms)

### Throughput
The number of operations that a system can handle properly per time unit. For instance the throughput of a server can often be measured in requests per second (RPS or QPS). 




