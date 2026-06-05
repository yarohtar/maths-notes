Let $G$ be a [[Algebra/Group Theory/Group]].
We say that $G$ is a $p$-group if $|G|=p^n$ for some $n$ and prime $p$.
### Theorem (centre)
If $G$ is a $p$-group, then the [[Algebra/Group Theory/Center]] $Z(G)$ is nontrivial.
#### Proof
Note that any [[Algebra/Group Theory/Conjugacy Class]] has order $1$ or divisible by $p$. 
$Z$ is the union of all $1$ classes. 
The union of all other conjugacy classes is $G\setminus Z$. 
But size of all other classes is divisible by $p$ 
so size of their union has to be divisible by $p$ 
so $G\setminus Z$ has to be divisible by $p$ 
so $|Z|$ has to be divisible by $p$ 
so $|Z|\geq p$ (as $Z$ nonempty with $e\in Z$)
#### Corollary
If $G$ is a [[Algebra/Group Theory/Simple]] $p$-group then $G\cong C_p$.
#### Corollary 
Let $G$ be a $p$-group of order $p^n$. 
Then $G$ contains a subgroup of order $p^r$ for every $1\leq r\leq n$. 
##### Proof
In the [[Algebra/Group Theory/Simple Group Decomposition]] of $G$ we have:
$$1=G_0\triangleleft\dots \triangleleft G_m=G$$
where $G_i/G_{i-1}$ is simple. 
Note that each $G_i$ is a $p$-group, 
hence so is $G_i/G_{i-1}$. 
But then $G_i/G_{i-1}\cong C_p$. 
The claim follows. 
### Lemma
For any [[Algebra/Group Theory/Group]] $G$, if $G/Z(G)$ is cyclic, then $G$ is [[Algebra/Group Theory/Abelian]]. 
#### Proof
Let $gZ$ be a generator of $G/Z$. 
Then each element in $G$ can be written as $g^kz$ for some $k$ and $z\in Z$. 
But now it is easy to check any two elements commute. 
#### Corollary
Any [[Algebra/Group Theory/Group]] of order $p^2$ for a prime $p$ is [[Algebra/Group Theory/Abelian]].