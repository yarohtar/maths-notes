Let $X$, $Y$ be [[Analysis/Normed Space]]s.
Say [[Algebra/Vector Spaces/Linear]] $T:X\to Y$ is compact if $\overline{T(B_{X})}$ is [[Topology/Compact]].
### Notes
- If $T:X\to Y$ compact, then certainly, $T(B_{X})$ is bounded, so $T$ is a [[Analysis/Linear Operator]].
- For $Y$ [[Analysis/Complete]],  is compact iff $T(B_{X})$ [[Analysis/Totally bounded]]
- $T:X\to Y$ is compact
  if and only if
  For any $(x_{n})$ in $B_{X}$, 
  there is a subsequence $(x_{n_{i}})$ such that $(Tx_{n_{i}})$ converges in $Y$.
### Proposition
$X$, $Y$, $Z$ normed, $S\in L(X,Y)$ and $T\in L(Y,Z)$.
Then:
1. If $S$ is compact $\implies$ $T\circ S$ is compact
2. If $T$ is compact $\implies$ $T\circ S$ is compact
#### Proof
1. Given $(x_{n})$ in $B_{X}$: 
   There is a subsequencce with $(Sx_{n_{i}})$ convergent so $(TSx_{n_{i}})$ convergent ($T$ is continuous)
2. Given $(x_{n})$ in $B_{X}$: 
   have $(Sx_{n})$ bounded, so there is a subsequence with $(TSx_{n_{i}})$ convergent because $T$ is compact.