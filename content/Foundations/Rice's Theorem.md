A nontrivial [[Foundations/Index Set]] cannot be computable.
### Proof
For a fixed $w$ consider the following function
$$
g_{w}(u,v)=\begin{cases}
f_{w,1}(v) & \text{if } u\in K \\
\uparrow & \text{otherwise}
\end{cases}
$$
Note that $g_{w}$ is computable, as we can run $f_{u,1}(u)$ 
and if $u\not\in K$ then it will diverge.
Otherwise, we run $f_{w,1}(v)$.
(We used $K$ from [[Foundations/The Halting Problem]])

By [[Foundations/The s-m-n Theorem]] we get a computable function $h_{w}$ 
such that 
$$
f_{h_{w}(u),1}(v) = g_{w}(u,v)
$$
If $u\in K$ then $W_{h_{w}(u)}=W_{w}$. 
If $u\not\in K$ then $W_{h_{w}(u)}=\emptyset$
Let $I$ be an [[Foundations/Index Set]].
Fix some $e$ such that $W_{e}=\emptyset$. 
Then either $e\in I$ or $e\not\in I$.
#### Case 1
If $e\in I$ then find some $w\not\in I$. 
We claim that $h_{w}$ is a reduction from $\mathbb{B}\setminus K$ to $I$. 
If $u\not\in K$ then $W_{h_{w}(u)}=\emptyset=W_{e}$ so $h_{w}(u)\in I$.
If $u\in K$, then $W_{h_{w}(u)}=W_{w}$, so $h_{w}(u)\not\in I$. 
This proves $B\setminus K\leq_{m}I$ so $I$ is not computable.
#### Case 2
If $e\not\in I$ by similar arguments find $w\in I$ 
and prove that $h_{w}$ reduces $K$ to $I$. 
Then $K\leq_{m}I$ so $I$ is not computable.
