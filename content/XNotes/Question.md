A question about $n+1$-tuples with $k+1$ possible answers is a partition of $\mathbb{B}^{n+1}$ into $k+1$ disjoint sets $A_{0}\dots A_{k}$. 

A [[XNotes/Register Machine]] $M$ with upper register index $m\geq n$ answers a question about $n+1$-tuples with $k+1$ answers if:
1. it has $k+1$ designated 'answer states' $q_{0},q_{1},\dots,q_{k}$ 
2. for any input $\vec{w}\in \mathbb{B}^{n+1}$, $M$ produces a configuration $(q_{i}, \vec{w})$ in finitely many steps if and only if $\vec{w}\in A_{i}$

Think of this as an if-else block. The register machine just progresses us to the next appropriate command based on the content of the registers (without changing the registers).
