In [[Foundations/Zermelo-Fraenkel Set Theory]] we can define the following

If $s \in x$ and $t\in y$ then $(s,t)=\{ \{ s \},\{ s,t \} \}\in \mathbb{P}\mathbb{P}(x\cup y)$ 
So we can form the set 
$x\times y=\{ z\in \mathbb{P}\mathbb{P}(x\cup y)\mid(\exists s)(\exists t)(s \in x\land t\in y\land z=(s,t)) \}$
using (Un), (Pow), (Sep)

In turn, we can form the set $y^{x}$ of all [[Foundations/Function]] from $x$ to $y$:
$$
y^{x}=\{ f\in \mathbb{P}(x\times y)\mid f:x\to y \}
$$
