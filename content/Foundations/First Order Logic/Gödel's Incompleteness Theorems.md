Let $T$ be a [[Foundations/First Order Logic/Theory]] which encodes natural numbers (e.g. $ZFC$ or $PA$)
We can encode formulas and proofs in $T$ with these numbers
so that every proof and/or formula is just a number in $\omega$
Define 
$$
\mathrm{Cons}(T) = (\forall n\in \omega)\, n \text{ is not the proof of } T\vdash \bot
$$
## Theorem 1
There is some formula $G$ such that if $\mathrm{Cons}(T)$
then $T\not\vdash G$ and $T\not\vdash \neg G$.
### Proof
Define a relation on $\omega$ given by $R(x,y)$ if and only if $x$ is a proof of $y$
(where $x$ is decoded as a proof, and $y$ is decoded as a formula)
For any $n\in \omega$ and $F$ a formula with one [[Foundations/First Order Logic/Free Variable]], 
let $y$ be the encoding of $F$ and let
$$
q(n,y)=\begin{cases}
1  & \text{if }\neg R(n,F(y)) \\
0 & \text{ otherwise}
\end{cases}
$$
i.e. $q(n,y)$ if and only if $n$ is not the proof of $F(y)$ 
Note that 
$$
(\forall n\in \omega)\, q(n,y)
$$
means that $T\not\vdash F(y)$ (if $y$ is an encoding of $F$ with one [[Foundations/First Order Logic/Free Variable]])
and it is itself a formula in one [[Foundations/First Order Logic/Free Variable]].
Let $z$ be the encoding of 
$$
F=(\forall n\in \omega)\, q(n,y)
$$
Then 
$$
q(n,z)
$$
says that $n$ is not a proof of $F(z)$ i.e. $n$ is not a proof of
$$
(\forall n\in \omega)\, q(n,z)
$$
Let $G=F(z)=(\forall n\in \omega)\,q(n,z)$
Then $G$ says that there is no proof of:
$$
(\forall n\in \omega)\, q(n,z)
$$
i.e. $G$ says that there is no proof of $G$.
If $T\vdash G$ then this is a contradiction, as we found a proof of $G$.
If $T\vdash \neg G$, then there is some $n$ such that $\neg q(n,z)$,
i.e. there is some $n$ such that $R(n,F(z))$ 
i.e. there is some proof of $G=F(z)$.
But then $T\vdash\bot$.
We conclude that if $\mathrm{Cons}(T)$ then 
$$
T\not\vdash F\text{ and }T\not\vdash \neg F
$$
## Theorem 2
$$
T\not\vdash \mathrm{Cons}(T)
$$
### Proof
Suppose
$$
T\vdash \mathrm{Cons}(T)
$$
Then $T$ proves that 
$$
T\not\vdash G \text{ and } T\not\vdash \neg G
$$
from the first theorem.
In particular $T$ proves that any $n\in \omega$ is not a proof of $G$
i.e. for any fixed $n\in \omega$, $T$ proves that 
$$
q(n,z)
$$
and thus:
$$
T\vdash(\forall n\in \omega)\,q(n,z)
$$
but then $T\vdash G$ which is a contradiction.


