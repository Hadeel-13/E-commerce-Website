import mobile from "../../assets/images/Products/mobile.png";
import "../../App.css";
import { Delete } from "@mui/icons-material";
import { PropTypes } from "prop-types";
import {
    Stack,
    Typography,
    Paper,
    IconButton,
    Tooltip,
    Box,
    FormControl,
    FormLabel,
    FilledInput,
    Rating,
    Divider,
    Grow,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function AdminCartItem() {
    return (
        <Link to={`/admin/orders/123`}>
            <Grow in={true}>
                <Paper className="p-3">
                    <Stack
                        className="h-full"
                        direction={"row"}
                        gap={1}
                        sx={{
                            flexWrap: { xs: "wrap", sm: "nowrap" },
                            justifyContent: { xs: "center", sm: "start" },
                        }}
                    >
                        <Typography
                            component={"img"}
                            src={mobile}
                            className="h-full w-52 my-auto"
                        />
                        <Stack
                            gap={2}
                            justifyContent={"start"}
                            alignContent={"center"}
                            direction={"column"}
                            className="w-full"
                            flexWrap={"wrap"}
                        >
                            <Stack
                                gap={1}
                                className="w-full"
                                flexWrap={"wrap"}
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Typography className="font-extrabold">
                                    رقم الطلب #1234
                                </Typography>
                                <Tooltip placement="top" title={"حذف"}>
                                    <IconButton
                                        sx={{
                                            ":hover": {
                                                color: "#d32f2f",
                                            },
                                        }}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            <Divider variant="inset" />
                            <Typography className="font-bold text-gray-500">
                                الإلكترونيات
                            </Typography>
                            <Typography>
                                آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G
                                LTE مع تطبيق فيس
                            </Typography>
                            <Rating
                                dir="ltr"
                                name="rate"
                                defaultValue={2.5}
                                // value={4.3}
                                precision={0.5}
                                size="small"
                                readOnly
                                className="self-start"
                            />
                            <Typography className="font-bold text-gray-500">
                                الماركة: <span className="text-black">آبل</span>
                            </Typography>
                            <Stack direction={"row"} flexWrap={"wrap"} gap={3}>
                                <ProductColor bgcolor="GrayText" />
                                <ProductColor bgcolor="White" />
                                <ProductColor bgcolor="black" />
                            </Stack>
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                gap={2}
                                flexWrap={"wrap"}
                                className="w-full"
                            >
                                <FormControl>
                                    <Stack
                                        direction={"row"}
                                        alignItems={"end"}
                                        justifyContent={"center"}
                                    >
                                        <FormLabel
                                            htmlFor="quantity"
                                            sx={{
                                                fontWeight: 700,
                                            }}
                                            color="primary"
                                            className="me-3 mb-1"
                                        >
                                            الكمية
                                        </FormLabel>
                                        <FilledInput
                                            color="primary"
                                            inputProps={{
                                                "aria-label": "description",
                                            }}
                                            id="quantity "
                                            type="number"
                                            className="quantity"
                                        />
                                    </Stack>
                                    {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
                                </FormControl>
                                <Typography className="font-bold">
                                    3000 جنيه
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Paper>
            </Grow>
        </Link>
    );
}
function ProductColor({ bgcolor }) {
    return (
        <Box
            sx={{
                width: 30,
                height: 30,
                border: 1,
                borderColor: "GrayText",
                borderRadius: "50%",
                bgcolor: bgcolor,
            }}
        />
    );
}
ProductColor.propTypes = {
    bgcolor: PropTypes.string.isRequired,
};
