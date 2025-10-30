Given a [[Foundations/First Order Logic/Language]] $L$ and a $L$-[[Foundations/First Order Logic/Structure]] $M$,
we define "$\phi$ is true in $M$" or:
$$
M\models \phi
$$
for a formula $\phi$, recursively on $\phi$.
Crucial step is:
$$
M,I \models \exists x\,\phi
$$
if and only if for some $a\in M$:
$$
M,I \frac{ a }{ x } \models \phi(a)
$$
### Theorem (Tarski)
There is no formula saying something is true. 
 
