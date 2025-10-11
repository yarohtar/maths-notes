Let $M$ be a [[Foundations/Register Machine]] and $k,n\in \mathbb{N}$
We define the following sets $T_{m,k,n}\subseteq \mathbb{B}^{k}$, $T_{M,k}\subseteq \mathbb{B}^{k+1}$, $\hat{T}_{M,k}\subseteq \mathbb{B}^{k+2}$
$$
T_{M,k,n}=\{ \vec{w}: M \text{ halted on }\vec{w}\text{ after at most }n \text{ steps} \}
$$
$$
T_{M,k}=\{ (\vec{w},u): M \text{ halted on }\vec{w} \text{ after at most }\#u \text{ steps} \}
$$
$$
\hat{T}_{M,k}=\{ (\vec{w},u,v): (\vec{w},u)\in T_{M,k} \text{ and }v \text{ is the final content of reg 0} \}
$$
### Proposition
These sets are computable.
#### Proof
Only prove for last one, because it is the most complicated.
