Let $\varphi:\mathbb{B}\dashrightarrow \mathbb{B}$ and $w\in \mathbb{B}$
We call $w$ a fixed point of $\varphi$ if $f_{\varphi(w),1}=f_{w,1}$ 
(using notation from [[XNotes/The Software Principle]])
### Theorem
If $\varphi:\mathbb{B}\to \mathbb{B}$ is total, then $\varphi$ has a fixed point. 
### Proof
Consider the [[XNotes/Partial Function]] 
$$
g(u,v) = \begin{cases}
f_{f_{u,1}(u),1}(v) & \text{if } u\in K \\
\uparrow & \text{otherwise}
\end{cases}
$$
Apply [[XNotes/The s-m-n Theorem]] to find a total function $h$
such that:
$$
f_{h(u)}(v) = \begin{cases}
f_{f_{u,1}(u),1}(v)  &  \text{if } u\in K  \\
\uparrow & \text{otherwise}
\end{cases}
$$
Now consider $e$ such that $f_{e,1}=\phi \circ h$
Note $f_{e,1}(e)=\phi(h(e))$ so $e\in K$
Let $w=h(e)$
Then
$$
f_{\phi(w),1} = f_{f_{e,1}(e),1} = f_{h(e),1} = f_{w,1}
$$
Thus $w$ is a fixpoint