Given a [[XNotes/Register Machine\|register machine]] $M$ with upper register index $n$ and a [[Foundations/Configuration of a Register Machine]] $C$ of length $n+1$, we can define the action of $M$ on $C$. We say that $M$ transforms $C$ to $C'$.
The definition is as expected based on the $Q$-instructions.

### Definition
If $M$ is a register machine with upper register index $n$ and input $\vec{w}=(w_{0},w_{1},\dots w_{n})\in \mathbb{B}^{n+1}$, then the computation sequence of $M$ with input $\vec{w}$ is defined by recursion:
$$
\begin{align}
C(0,M,\vec{w}) & =(q_{S},\vec{w}) \\
C(k+1,M,\vec{w})  & = C \text{ where } M \text{ transforms } C(k,M,\vec{w}) \text{ to } C
\end{align}
$$
We say that he computation halts if there is some element in the sequence $(q_{H},\vec{v})$. Otherwise, we say that the computation sequence does not halt. 
### Note
We require the input to be of appropriate length but we just conventionally pad it with empty words if it is not. 