Given two distributions $P$ and $Q$ on $A$ 
the total variation distance is defined as:
$$
\lVert P-Q \rVert _{TV} =\sum_{x\in A} \lvert P(x)-Q(x) \rvert 
$$
### Lemma
If $B=\{ x\in A: P(x)\geq Q(x) \}$ then 
$$
\lVert P-Q \rVert _{TV}  = 2(P(B)-Q(B))
$$
#### Proof
$$
\begin{align}
\lVert P-Q \rVert_{TV} & =\sum_{x\in B}(P(x)-Q(x))+ \sum_{x\in B^{C}}(Q(x)-P(x)) \\
 & =P(B)-Q(B) + (1-Q(B)) - (1-P(B))  \\
\lVert P-Q \rVert _{TV}  & = 2(P(B)-Q(B))
\end{align}
$$

