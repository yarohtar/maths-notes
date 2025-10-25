Let $\mathcal{C}$ be a [[Foundations/Category Theory/Small Category]].
The Yoneda embedding is the assignment $A\to \mathcal{C}(A,\cdot)$ and 
$$
\begin{align}
(B\xrightarrow{f}A)
 \longrightarrow 
 \Psi(f): \quad %quad
\mathcal{C}(A,\cdot)  & \to \mathcal{C}(B,\cdot) \\
 (A\xrightarrow{g}C)  & \to (B\xrightarrow{gf}C)
\end{align}
$$
where $\mathcal{C}(A,\cdot)$ is the [[Foundations/Category Theory/Hom-Functor]].
Alternatively, it is the assignment $B\to \mathcal{C}(\cdot,B)$ and
$$
\begin{align}
(A\xrightarrow{f}B) \longrightarrow \Psi(f): \quad %quad
 \mathcal{C}(\cdot,B)  & \to \mathcal{C}(\cdot,A) \\
(C\xrightarrow{g}B)  & \to (C\xrightarrow{fg}A)
\end{align}
$$

### Lemma
The mapping $A\to \mathcal{C}(A,\cdot)$ defines a [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]] [[Foundations/Category Theory/Functor]] $\mathcal{C}^{op}\to[\mathcal{C},\mathrm{Set}]$
### Proof
Putting $F=\mathcal{C}(B,\cdot)$ in [[Foundations/Category Theory/Yoneda Lemma]], 
we find that the Yoneda Embedding is a bijection from $\mathcal{C}(B,A)$ 
to the collection of [[Foundations/Category Theory/Natural Transformation]]s $\mathcal{C}(A,\cdot)\to \mathcal{C}(B,\cdot)$
Thus this will automatically be [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]].
The [[Foundations/Category Theory/Functor\|functoriality]] of this follows from [[Foundations/Category Theory/Associativity]] of composition in $\mathcal{C}$

