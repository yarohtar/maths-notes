Let $C$ be a $(n,r)$ [[Linear Code]] with [[Parity Check Matrix]] $H$
Suppose we receive $x$
We form the [[Syndrome]] $Hx$

Suppose we know $C$ is $e$ [[Error correcting]]
We tabulate the syndrome $Hz$ for all $z\in \mathbb{F}_{2}^{n}$ with $w(z)\leq e$
We search for $Hx$ in this list
If successful, we decode $x$ as $c=x-z$
Otherwise, we know that there was more than $e$ mistakes.
